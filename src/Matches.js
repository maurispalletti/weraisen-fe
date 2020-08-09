import React, { Component } from 'react';
import './Results.css';
import './Matches.css';
import Header from '../src/components/Header'
import MatchCard from './components/MatchCard';
import { Redirect } from 'react-router';
import userServices from './services/userServices'
import { Formik, Form } from 'formik'
import FieldWithError from './forms/FieldWithError'
import DropdownGender from './forms/DropdownGender'

const status = [
  {
    value: "Activo",
    description: 'Activo'
  },
  {
    value: "Finalizado",
    description: 'Finalizado'
  },
  {
    value: "Pendiente",
    description: 'Esperando aprobación'
  },
  {
    value: "Cancelado",
    description: 'Cancelado'
  },
  {
    value: "Anulado",
    description: 'Solicitud rechazada'
  },
]


let INITIAL_VALUES = {
  status: '',
  name: '',



}

class Matches extends Component {

  state = {
    goToHome: false,
    goToProfile: false,
    searchFailed: false,
    matches: [],
    newMatches: [],
    loading: true,
    showFilters: false,
    filterMatches: [],
    ////
    date: '',
    status: '',
    name: ''
  }

  componentDidMount() {
    this.getMatches()
  }
  mostrarFiltros = () => {
    this.setState({ showFilters: !this.state.showFilters });

  }
  getMatches = async () => {
    try {
      let fullInfoMatches = [];

      const userId = localStorage.getItem("userId");

      const response = await userServices.getMatches(userId);

      if (response && response.data) {
        const matches = response.data;
        for (let index = 0; index < matches.length; index++) {
          const match = matches[index];

          let userToFind;
          let partnerRole;

          if (userId === match.guide) {
            userToFind = match.tourist;
            partnerRole = 'TOURIST';
          } else {
            userToFind = match.guide;
            partnerRole = 'GUIDE';
          }
          const { data: { firstName, lastName, profilePicture } } = await userServices.getProfile(userToFind);
          const partnerName = `${firstName} ${lastName}`;
          fullInfoMatches.push({ ...match, partnerRole, partnerName, profilePicture });
        }

        let newMatches = [];

        if (fullInfoMatches.length > 0) {
          newMatches = fullInfoMatches.map(match => {
            const { id, partnerRole, partnerName, chatId, status, createdAt, profilePicture } = match
            return (
              <MatchCard
                key={id}
                matchId={id}
                partnerRole={partnerRole}
                partnerName={partnerName}
                chatId={chatId}
                status={status}
                date={createdAt}
                profilePicture={profilePicture}

                refresh={() => this.getMatches()}
              />

            )
          });
        }
        this.setState({ newMatches, loading: false })
      }
    } catch (error) {
      console.error(`There was an error trying to get matches: ${error}`)
      this.setState({ searchFailed: true, loading: false })
      return null
    }
  }

  capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  searchMatches = (filters) => {
    const { status, name } = filters
    let filterMatches = [];
    let nameMatches = [];
    let dateMatches = [];
    let matches = this.state.newMatches
    console.log(matches)

    if (status !== "") {
      for (var match = 0; match < matches.length; match++) {
        if (matches[match].props.status === status) {
          filterMatches.push(matches[match])
        }
      }
    }
    else {
      filterMatches = this.state.newMatches
    }
    if (name !== "") {
      for (var match = 0; match < filterMatches.length; match++) {
        if (filterMatches[match].props.partnerName.substr(0, name.length) === this.capitalize(name)) {
          nameMatches.push(filterMatches[match])
        }
      }
    }
    else {
      nameMatches = filterMatches
    }

    console.log(this.state.date)
    if (this.state.date !== "") {
      for (var match = 0; match < nameMatches.length; match++) {
        const date = new Date(nameMatches[match].props.date);
        const day = date.getUTCDate()
        const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
        var year = date.getFullYear()

        var fecha = year + "-" + month + "-" + day;
        if (fecha === this.state.date) {

          dateMatches.push(nameMatches[match])
        }
      }
    }
    else {
      dateMatches = nameMatches

    }
    console.log(dateMatches);

    if (dateMatches.length > 0) {
      filterMatches = dateMatches.map(match => {
        const date = new Date(match.props.date);
        const day = date.getDate()
        const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
        var year = date.getFullYear()

        var fecha = year + "-" + month + "-" + day;

        return (
          <MatchCard
            key={match.key}
            matchId={match.props.matchId}
            partnerRole={match.props.partnerRole}
            partnerName={match.props.partnerName}
            chatId={match.chatId}
            status={match.props.status}
            date={fecha}
            profilePicture={match.props.profilePicture}
            refresh={() => this.searchMatches(status, name)}
          />
        )
      })

      this.setState({ filterMatches, loading: false })
    }
    else {
      this.setState({ filterMatches: "not", loading: false })
    }

    console.log(this.state.filterMatches)
  }



  handleChangeMatchDay = (event) => {
    this.setState({ date: event.target.value });
  }

  render() {
    if (this.state.goToHome) {
      return <Redirect to="/home" />
    }
    if (this.state.goToProfile) {
      return <Redirect to="/profile" />
    }

    if (this.state.loading) {
      return (
        <div className="Matches">
          <Header />
          <div className="BodyMatches">
            <h2>Cargando resultados...</h2>
          </div>
        </div>
      )
    } else {
      if (this.state.newMatches.length < 1) {
        return (
          <div className="Matches">
            <Header />
            <div className="BodyMatches">
              <h2>Aún no posees ningun encuentro</h2>
            </div>
          </div>
        )
      } else {

        INITIAL_VALUES = {
          status: this.state.status,
          name: this.state.name
        }

        return (
          <div className="Matches">
            <Header />
            <div className="BodyMatches">
              <Formik
                initialValues={INITIAL_VALUES}
                onSubmit={(filters) => this.searchMatches(filters)}>
                <Form>
                  <h2 style={{ marginBottom: 40, display: this.state.showFilters ? 'none' : 'block' }}>Tus encuentros</h2>

                  <div className="Filters" style={{ display: this.state.showFilters ? 'block' : 'none' }}>

                    <div className="Fecha">
                      <h3>Fecha del encuentro</h3>


                      <FieldWithError name="date"
                        className="input"
                        value={this.state.value}
                        onChange={this.handleChangeMatchDay}
                        type="date"
                      />
                    </div>
                    <br></br>
                    <h3>Estado</h3>
                    <DropdownGender name="status" styleName={"input"} options={status} />
                    <br></br>
                    <h3>Nombre de tu acompañante</h3>
                    <FieldWithError name="name" placeholder="Ingresa las primeras letras..." aria-label="description" type="text" className="input" />
                    <br></br>
                    <input type="submit" className="btn-primero" value="Filtrar encuentros" />
                  </div>
                  <p className="verMas" onClick={() => this.mostrarFiltros()} >{this.state.showFilters ? "Ocultar filtros" : "Filtrar encuentros"}</p>


                  <br></br>
                  <div className="Filters" style={{ display: this.state.showFilters ? 'none' : 'block' }}>
                    {this.state.newMatches}
                  </div>
                  <div className="Filters" style={{ color: '#272b30', display: this.state.showFilters & (this.state.filterMatches !== "not") ? 'block' : 'none' }}>
                    {this.state.filterMatches}
                  </div>
                  <div className="Filters" style={{ display: this.state.showFilters & (this.state.filterMatches === "not") ? 'block' : 'none' }}>

                    <div style={{ paddingBottom: '10px', paddingTop: '0px' }}>
                      <h2>Los filtros ingresados no coinciden con ninguno de tus encuentros</h2>
                    </div>

                  </div>
                  <div className="ButtonSection">
                    <input type="button" className="btn-primero" value="Volver al menú principal" onClick={() => this.setState({ goToHome: true })} />
                  </div>
                  {this.state.searchFailed && (
                    <p className="form-error">La búsqueda de encuentros falló. Intentá de nuevo por favor.</p>
                  )}
                </Form>
              </Formik>
            </div>
          </div>
        );
      }
    }
  }
}
export default Matches;
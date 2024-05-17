// // Write your code here
// import {Component} from 'react'
// import './index.css'
// import Loader from 'react-loader-spinner'

// import VaccinationCoverage from '../VaccinationCoverage'
// import VaccinationByGender from '../VaccinationByGender'
// import VaccinationByAge from '../VaccinationByAge'

// const apiStatusContainer = {
//   failure: 'FAILURE',
//   success: 'SUCCESS',
//   inProgress: 'IN_PROGRESS',
//   initail: 'INITAIL',
// }

// class CowinDashboard extends Component {
//   state = {
//     apiStatus: apiStatusContainer.initail,
//     last7DayVaccination: [],
//     vaccinationByGender: [],
//     vaccinationByAge: [],
//   }

//   componentDidMount() {
//     this.getCowinList()
//   }

//   getCowinList = async () => {
//     this.setState({
//       apiStatus: apiStatusContainer.inProgress,
//     })
//     const vaccinationDataApiUrl = ' https://apis.ccbp.in/covid-vaccination-data'

//     const options = {
//       method: 'GET',
//     }

//     const response = await fetch(vaccinationDataApiUrl, options)

//     if (response.ok === true) {
//       const data = await response.json()
//       console.log(data)
//       const last7DayVaccination = data.last_7_days_vaccination
//       const vaccinationByGender = data.vaccination_by_gender
//       const vaccinationByAge = data.vaccination_by_age
//       this.setState({
//         last7DayVaccination,
//         vaccinationByAge,
//         vaccinationByGender,
//         apiStatus: apiStatusContainer.success,
//       })
//     } else {
//       this.setState({
//         apiStatus: apiStatusContainer.failure,
//       })
//     }
//   }

//   renderSuccessCowin = () => {
//     const {last7DayVaccination, vaccinationByAge, vaccinationByGender} =
//       this.state
//     return (
//       <>
//         <VaccinationCoverage last7DayVaccination={last7DayVaccination} />
//         <VaccinationByGender vaccinationByGender={vaccinationByGender} />
//         <VaccinationByAge vaccinationByAge={vaccinationByAge} />
//       </>
//     )
//   }

//   renderFailureCowin = () => (
//     <div>
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
//         alt="failure view"
//         className="failure-img"
//       />
//       <h1>Something went wrong</h1>
//     </div>
//   )

//   renderLoaderCowin = () => (
//     <div data-testid="loader" className="loaderIcon">
//       <Loader type="ThreeDots" color="#ffffff" height={85} width={85} />
//     </div>
//   )

//   renderAllCowinList = () => {
//     const {apiStatus} = this.state
//     switch (apiStatus) {
//       case apiStatusContainer.success:
//         return this.renderSuccessCowin()
//       case apiStatusContainer.failure:
//         return this.renderFailureCowin()
//       case apiStatusContainer.inProgress:
//         return this.renderLoaderCowin()
//       default:
//         return null
//     }
//   }

//   render() {
//     return (
//       <div className="cowin-container">
//         <nav className="nav-container">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
//             alt="website logo"
//             className="website-img"
//           />
//           <p className="co-win-text">Co-WIN</p>
//         </nav>
//         <div className="vaccination-container">
//           <h1 className="cowin-heading">CoWIN Vaccination in India</h1>
//         </div>
//         {this.renderAllCowinList()}
//       </div>
//     )
//   }
// }

// export default CowinDashboard

import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    last7DaysVaccination: [],
    vaccinationByAge: [],
    vaccinationByGender: [],
  }

  componentDidMount() {
    this.getCovidVaccinationData()
  }

  getCovidVaccinationData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const covidVaccinationDataApiUrl =
      'https://apis.ccbp.in/covid-vaccination-data'

    const options = {
      method: 'GET',
    }

    const response = await fetch(covidVaccinationDataApiUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()

      const last7DaysVaccination = fetchedData.last_7_days_vaccination

      const vaccinationByAge = fetchedData.vaccination_by_age

      const vaccinationByGender = fetchedData.vaccination_by_gender

      this.setState({
        last7DaysVaccination,
        vaccinationByAge,
        vaccinationByGender,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoaderView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderSuccessView = () => {
    const {last7DaysVaccination, vaccinationByAge, vaccinationByGender} =
      this.state

    return (
      <>
        <VaccinationCoverage last7DaysVaccination={last7DaysVaccination} />
        <VaccinationByGender vaccinationByGender={vaccinationByGender} />
        <VaccinationByAge vaccinationByAge={vaccinationByAge} />
      </>
    )
  }

  renderFailureView = () => (
    <>
      <img
        className="failure-img"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 className="failure-heading">Something went wrong</h1>
    </>
  )

  renderAllViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="app-container">
        <nav className="nav-bar">
          <div className="website-logo-container">
            <img
              className="website-logo-img"
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            <h1 className="website-name">Co-WIN</h1>
          </div>
        </nav>

        <div className="charts-content">
          <div className="charts-container">
            <h1 className="main-heading">CoWin Vaccination in India</h1>
            {this.renderAllViews()}
          </div>
        </div>
      </div>
    )
  }
}

export default CowinDashboard

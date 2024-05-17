// // Write your code here
// import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

// const VaccinationByGender = props => {
//   const {vaccinationByGender} = props

//   return (
//     <div>
//       <h1>Vaccination by gender</h1>
//       <ResponsiveContainer width="100%" height={300}>
//         <PieChart>
//           <Pie
//             cx="70%"
//             cy="40%"
//             data={vaccinationByGender}
//             startAngle={0}
//             endAngle={180}
//             innerRadius="40%"
//             outerRadius="70%"
//             dataKey="count"
//           >
//             <Cell name="Male" fill="#f54394" />
//             <Cell name="Female" fill="#5a8dee" />
//             <Cell name="Other" fill="#2cc6c6" />
//           </Pie>
//           <Legend
//             iconType="circle"
//             layout="vertical"
//             verticalAlign="middle"
//             align="center"
//           />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   )
// }

// export default VaccinationByGender

// Write your code here
import './index.css'

import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props

  return (
    <div className="VaccinationByGender">
      <h1 className="heading">Vaccination By Gender</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={vaccinationByGender}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill=" #f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Other" fill="#2cc6c6" />
          </Pie>
          <Legend iconType="circle" verticalAlign="middle" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender

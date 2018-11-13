import React from 'react'

const CompanyCard = ({ selectedCompany }) => {
  return (
    <div>
      <div>
        <h2>{selectedCompany}</h2>
      </div>
    </div>
  )
}

export default CompanyCard;
// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({data}) => {
    const {name, phone, email, photo} = data
    return (
    <div className="container">
      <div className="card">
        <table>
          <tbody>
            <tr aria-rowspan={3}>
              <td>
                <img src={photo} alt={name} className="image" />
              </td>
              <tr className="strong">{name}</tr>
              <tr className="strong">{phone}</tr>
              <tr className="strong">{email}</tr>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default Contact;
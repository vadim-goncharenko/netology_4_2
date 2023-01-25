import React from 'react';
function Listing(props) {
  const { steps, delStep } = props

  const submitStep = evt => {
    delStep(evt.target.id)
  }
    return  (
            
      <div className="item-list">
        <table>
          <thead>
            <tr>
              <th>
                Дата
              </th>
              <th>
                Пройдено, км
              </th>
              <th>
                Действия
              </th>
            </tr>
          </thead>
          <tbody>
            {steps.map((item) =>
              <tr key={item.id}>
                <td>
                  {item.date}
                </td>
                <td>
                  {item.distance}
                </td>
                <td>
                  <input type="submit" id={item.id} value="✘" onClick={submitStep}/>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
            
    )
}

export default Listing;
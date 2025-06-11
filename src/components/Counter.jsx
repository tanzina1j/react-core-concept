import React from 'react'

const Counter = () => {
  return (
    <section className="counter-section">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="counter-element d-flex align-items-center justify-content-around mb-30">
                  <div className="counter-items">
                    <span className="count counter-color-1">740</span>
                    <p>CUPS OF COFFEE</p>
                  </div>
                  <div className="counter-items counter-color-3">
                    <span className="count">3</span>
                    <span>k</span>
                    <p>happy customer</p>
                  </div>
                </div>
                <div className="counter-element d-flex align-items-center justify-content-around">
                  <div className="counter-items">
                    <span className="count counter-color-2">130</span>
                    <p>completed work</p>
                  </div>
                  <div className="counter-items">
                    <span className="count counter-color-4">400</span>
                      <p>letters sents</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="style-one">
                  <img src="https://img.freepik.com/free-photo/smiling-business-team-standing-conference-room_1262-1963.jpg?uid=R167929721&ga=GA1.1.1538646131.1728666203&semt=ais_items_boosted&w=740"/>
                </div>
              </div>
            </div>
          </div>
    </section>
  )
}

export default Counter

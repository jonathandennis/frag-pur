import React from 'react'

import './Stone.css'

const Stone = () => {
  
    return (
        <section className="stone__container">
          <div className="stone__nav">
            <fieldset>
              <legend className="stone__nav-head">Type</legend>
              <div className="stone__nav-list">
                <div className="stone__nav-var">
                  <input type="checkbox"
                      id="marbre"
                      name="type"
                      value="marbre"
                  />
                  <label for="marbre"> Marbre</label>
                </div>
                <div className="stone__nav-var">
                  <input type="checkbox"
                      id="granit"
                      name="type"
                      value="granit"
                  />
                  <label for="granit"> Granit</label>
                </div>
                <div className="stone__nav-var">
                  <input type="checkbox"
                      id="onyx"
                      name="type"
                      value="onyx"
                  />
                  <label for="onyx"> Onyx</label>
                </div>
                <div className="stone__nav-var">
                  <input type="checkbox"
                      id="travertin"
                      name="type"
                      value="travertin"
                  />
                  <label for="travertin"> Travertin</label>
                </div>
                <div className="stone__nav-var">
                  <input type="checkbox"
                      id="quartz"
                      name="type"
                      value="quartz"
                  />
                  <label for="quartz"> Quartz</label>
                </div>
                <div className="stone__nav-var">
                  <input type="checkbox"
                      id="terrazzo"
                      name="type"
                      value="terrazzo"
                  />
                  <label for="terrazzo"> Terrazzo</label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="stone__nav-head">Couleur</legend>
              <div className="stone__nav-list">
                <div className="stone__nav-var">
                  <input type="checkbox"
                      id="noir"
                      name="couleur"
                      value="noir"
                  />
                  <label for="noir"> Noir</label>
                </div>
                <div className="stone__nav-var">
                  <input type="checkbox"
                      id="blanc"
                      name="couleur"
                      value="blanc"
                  />
                  <label for="blanc"> Blanc</label>
                </div>
                <div className="stone__nav-var">
                  <input type="checkbox"
                      id="gris"
                      name="couleur"
                      value="gris"
                  />
                  <label for="gris"> Gris</label>
                </div>
                <div className="stone__nav-var">
                  <input type="checkbox"
                      id="beige"
                      name="couleur"
                      value="beige"
                  />
                  <label for="beige"> Beige</label>
                </div>
                <div className="stone__nav-var">
                  <input type="checkbox"
                      id="rouge"
                      name="couleur"
                      value="rouge"
                  />
                  <label for="rouge"> Rouge</label>
                </div>
                <div className="stone__nav-var">
                  <input type="checkbox"
                      id="vert"
                      name="couleur"
                      value="vert"
                  />
                  <label for="vert"> Vert</label>
                </div>
                <div className="stone__nav-var">
                  <input type="checkbox"
                      id="bleu"
                      name="couleur"
                      value="bleu"
                  />
                  <label for="bleu"> Bleu</label>
                </div>
                <div className="stone__nav-var">
                  <input type="checkbox"
                      id="multi"
                      name="couleur"
                      value="multi"
                  />
                  <label for="multi"> Multi</label>
                </div>
              </div>
            </fieldset>
          </div>
            <div className="stone__display">
                <figure className="stone__card">
                    <img className="stone__img"
                        src={`${process.env.PUBLIC_URL}/assets/images/stone/BiancoSivec1.jpg`}
                        alt="BiancoSivec"
                    />
                    <h3 className="stone__card-head">Bianco Sivec</h3>
                    <p className="stone__card-type">Marbre</p>
                </figure>
                <figure className="stone__card">
                    <img className="stone__img"
                        src={`${process.env.PUBLIC_URL}/assets/images/stone/FantasyWhite1.jpg`}
                        alt="Fantasy White"
                    />
                    <h3 className="stone__card-head">Fantasy White</h3>
                    <p className="stone__card-type">Marbre</p>
                </figure>
                <figure className="stone__card">
                    <img className="stone__img"
                        src={`${process.env.PUBLIC_URL}/assets/images/stone/ImperialWhite1.jpg`}
                        alt="Imperial White" />
                    <h3 className="stone__card-head">Imperial White</h3>
                    <p className="stone__card-type">Marbre</p>
                </figure>
                <figure className="stone__card">
                    <img className="stone__img"
                        src={`${process.env.PUBLIC_URL}/assets/images/stone/Infinito1.jpg`}
                        alt="Infinito" />
                    <h3 className="stone__card-head">Infinito</h3>
                    <p className="stone__card-type">Marbre</p>
                </figure>
            </div>
        </section>
    )
}

export default Stone
import React from 'react'

import './StoneFilter.css'

const StoneFilter = () => {

    return (
        <div className="stone__nav">
            <h2 className="stone__nav-head">Type</h2>
            <div className="stone__nav-list">
              <label className="stone__nav-var">
                <input type="checkbox"
                    id="marbre"
                    name="type"
                    value="marbre"
                />Marbre
                <span className="checkmark"></span>
              </label>
              <label className="stone__nav-var">
                <input type="checkbox"
                    id="granit"
                    name="type"
                    value="granit"
                />Granit
                <span className="checkmark"></span>
              </label>
              <label className="stone__nav-var">
                <input type="checkbox"
                    id="onyx"
                    name="type"
                    value="onyx"
                />Onyx
                <span className="checkmark"></span>
              </label>
              <label className="stone__nav-var">
                <input type="checkbox"
                    id="travertin"
                    name="type"
                    value="travertin"
                />Travertin
                <span className="checkmark"></span>
              </label>
              <label className="stone__nav-var">
                <input type="checkbox"
                    id="quartz"
                    name="type"
                    value="quartz"
                />Quartz
                <span className="checkmark"></span>
              </label>
              <label className="stone__nav-var">
                <input type="checkbox"
                    id="terrazzo"
                    name="type"
                    value="terrazzo"
                />Terrazzo
                <span className="checkmark"></span>
              </label>
            </div>
            <h2 className="stone__nav-head">Couleur</h2>
            <div className="stone__nav-list">
              <label className="stone__nav-var">
                <input type="checkbox"
                    id="noir"
                    name="couleur"
                    value="noir"
                />Noir
                <span className="checkmark"></span>
              </label>
              <label className="stone__nav-var">
                <input type="checkbox"
                    id="blanc"
                    name="couleur"
                    value="blanc"
                />Blanc
                <span className="checkmark"></span>
              </label>
              <label className="stone__nav-var">
                <input type="checkbox"
                    id="gris"
                    name="couleur"
                    value="gris"
                />Gris
                <span className="checkmark"></span>
              </label>
              <label className="stone__nav-var">
                <input type="checkbox"
                    id="beige"
                    name="couleur"
                    value="beige"
                />Beige
                <span className="checkmark"></span>
              </label>
              <label className="stone__nav-var">
                <input type="checkbox"
                    id="rouge"
                    name="couleur"
                    value="rouge"
                />Rouge
                <span className="checkmark"></span>
              </label>
              <label className="stone__nav-var">
                <input type="checkbox"
                    id="vert"
                    name="couleur"
                    value="vert"
                />Vert
                <span className="checkmark"></span>
              </label>
              <label className="stone__nav-var">
                <input type="checkbox"
                    id="bleu"
                    name="couleur"
                    value="bleu"
                />Bleu
                <span className="checkmark"></span>
              </label>
              <label className="stone__nav-var">
                <input type="checkbox"
                    id="multi"
                    name="couleur"
                    value="multi"
                />Multi
                <span className="checkmark"></span>
              </label>
            </div>
        </div>
    )
}

export default StoneFilter
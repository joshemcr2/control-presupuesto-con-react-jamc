import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos, setGastos }) => {
    return (
        <div>
            <header>
                <h1>Planificador De Gastos</h1>
                {isValidPresupuesto ? (
                    <ControlPresupuesto
                        gastos={gastos}
                        setGastos={setGastos}
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                ) : (<NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}

                    setIsValidPresupuesto={setIsValidPresupuesto}
                />)}


            </header>
        </div>
    )

}

export default Header
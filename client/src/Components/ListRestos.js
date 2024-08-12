import React, { useState, useEffect } from 'react';

const ListRestos = ({ randomResto, showResto }) => {
    const [restos, setRestos] = useState([]);

    //LIST OF RESTAURANTS
    const getRestos = async () => {
        try {
            const response = await fetch("http://localhost:5000/resto");
            const jsonData = await response.json();
            setRestos(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getRestos();
    }, []);

    //INCREMENTING COUNT UPDATE
    const updateCount = async (id) => {
        try {
            await fetch(`http://localhost:5000/resto/${id}/increment`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" }
            });

            getRestos();
        } catch (error) {
            console.error(error.message);
        }
    };

    //DELETE RESTAURANT
    const deleteResto = async(id) => {
        try {
            const deleteResto = await fetch(`http://localhost:5000/resto/${id}`, {
                method: "DELETE"
            });

            setRestos(restos.filter(resto => resto.resto_id !== id)); //filter out immediately

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div>
            {randomResto && showResto && (
                <p>
                    Will you <span className="italic">actually</span> go to {randomResto.name}🥺? 
                    <button 
                        className="font-bold hover:scale-125 ml-1"
                        onClick={() => {updateCount(randomResto.resto_id);
                            document.getElementById('my_modal_4').showModal();
                        }}
                    >
                        Yes!
                    </button>

                    {/* MODAL */}
                    <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Congratulations!</h3>
                            <p className="py-4">bruh</p>
                            <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                </p>
                
            )}
            <div className="overflow-x-auto mt-4"> 
                <table className="table">
                    <thead>
                        <tr>
                            <th>Restaurant</th>
                            <th className="text-center">Visit Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {restos.map(resto => (
                            <tr key={resto.resto_id}>
                                <td>{resto.name}</td>
                                <td className="text-center">{resto.count}</td>
                                <td><button className="btn btn-xs btn-error btn-outline" onClick={() => deleteResto(resto.resto_id)}>—</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListRestos;

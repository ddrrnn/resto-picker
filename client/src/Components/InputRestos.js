import React, { useState } from 'react';


const InputRestos = () => {

    const [name, setName] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault(); //prevent refresh
        try {
            const body = { name };
            const response = await fetch("http://localhost:5000/resto",
                {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
                // console.log(response);
                window.location = "/";
        
        } catch (error) {
            console.error(error.message);
        }
    };

  return (
    <div class ='main-wrapper'>
        <div class='flex'>
        <button title="Add a Restaurant" className="btn btn-circle btn-outline absolute top-10 right-[5%]" onClick={()=>document.getElementById('my_modal_5').showModal()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
        </button>
        </div>

        {/* MODAL */}
            <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Input a Restaurant</h3>
                <form className="d-flex m-5 pr-0" onSubmit={onSubmitForm}>
                <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button className="btn btn-primary my-0 ml-[10px]" >Add</button>
                </form>
                <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() => document.getElementById('my_modal_5').close()}>
                    ✕
                </button>
            </div>
            </dialog>
    </div>
  )
}

export default InputRestos

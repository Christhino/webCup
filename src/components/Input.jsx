import { useState, useCallback, useEffect } from "react";
import TextInput from "./TextInput";
import { postDream } from "../modules/openIA/api";
export  default  function Input() {
    const [result, setResult] = useState("");
    const [textInput, setTextInput] = useState("");
    const [waiting, setWaiting] = useState(false);
    const onSubmit = async(e) =>  {
        e.preventDefault()
        setResult('')
        setWaiting(true)
        const predire = await postDream(textInput)
        console.log(predire);
        setResult(" ¿Podrías proporcionar más información o clarificar tu pregunta? Estoy aquí para ayudarte en cualquier cosa que necesites.")
        setWaiting(false)
    }
    return (
        <>
           <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
                <div className="w-full p-5 flex flex-col gap-5 max-w-2xl min-w-[320px] relative 2xl:max-w-7xl">
                    <header className="flex gap-3 justify-between">
                        <div className="flex gap-3">
                            <img src="gpt-p5-emerald.png" alt="logo" className="h-11 w-11 p-2 bg-white rounded-full shadow shadow-emerald-600/30 overflow-visible"/>
                        <div className="text-gray-700">
                            <h1 className="font-semibold text-xl ">
                            Orinix 
                            </h1>
                            <p>Découvrer que les rêves peuvent prédire l’aveni✨</p>
                        </div>
                        </div>
                    </header>
                    <div className="flex flex-col gap-4 2xl:flex-row w-full">
                        <div className="flex flex-col gap-4 2xl:w-1/2">
                            <TextInput 
                                key="textinput-01"
                                textInput={textInput}
                                onChange={(e) => setTextInput(e.target.value)}
                                onSubmit={(e) =>onSubmit(e)}
                                waiting={waiting}
                            />
                            
                        </div>
                        <div className="flex flex-col gap-4 2xl:w-1/2">
                            <div className="rounded-md border border-gray-100 shadow-md shadow-emerald-600/30 bg-white p-3 flex flex-col gap-2">
                            <textarea 
                                className="block w-full bg-gray-100 rounded font-mono p-2 text-sm min-h-[70px] text-gray-500"
                                value={result}
                                readOnly
                                />
                            </div>
                        </div>
                    </div>
                
                </div>
            </section>
        </>
    )
}
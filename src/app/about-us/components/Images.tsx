import React from 'react'

const Images = () => {
    return (
        <img
            width={564}
            src="https://static.vecteezy.com/system/resources/previews/049/569/013/non_2x/white-jacket-with-hood-on-transparent-background-png.png"
            // className="w-full max-w-[340px] aspect-[1/1] object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-110 bg-slate-400"
            alt="Jacket"
            height={564}
            className={`h-48 md:h-64 object-contain transition-all duration-200 ease-linear p-2 border mb-4 rounded-lg`}
        />
    )
}

export default Images
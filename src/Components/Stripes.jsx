import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {
       var data = [
              { URL: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg", Number: "48" },
              { URL: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a791f752d7eb2b20280_Keystone-black.svg", Number: "2" },
              { URL: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg", Number: "11" },
              { URL: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg", Number: "48" },
              { URL: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b842910de1189f26accda_jologo-onLight.svg", Number: "2" },
              { URL: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf9533879784a0cf5fa_logo-onLight.svg", Number: "11" },
       ]
       return (
              <div className='flex items-center mt-10 '>
                     {data.map((elem, index) => (
                            <Stripe val={elem} />
                     ))}
              </div>
       )
}

export default Stripes

import { useState } from 'react'
import './TotalBox.css'
import Tip from './Tip'
import Total from './Total'
import Reset from './Reset'

function TotalBox(){

    return(
        <>
<Tip/>
<Total/>
<Reset/>
        </>
    )
}
export default TotalBox
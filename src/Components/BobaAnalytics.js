import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'

// https://www.textfontsgenerator.com/p/thankyou.html
export default function BobaAnalytics() {
    const history = useHistory();

    return (
        <>
            <div class = "analytics">
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            Hello Boba Content!<br />
            </div>
            <div class="analytics">
                <span class="days"><div class="day">(′︿‵｡) 𝕄𝕠𝕟𝕕𝕒𝕪 (′︿‵｡)</div></span>
                <span class="days"><div class="day">(oꆤ︵ꆤo) 𝕋𝕦𝕖𝕤𝕕𝕒𝕪 (oꆤ︵ꆤo)</div></span>
                <span class="days"><div class="day">(◕︿◕✿) 𝕎𝕖𝕕𝕟𝕖𝕤𝕕𝕒𝕪 (✿◕︿◕)</div></span>
                <span class="days"><div class="day">(๑°︿°`๑) 𝕋𝕙𝕦𝕣𝕤𝕕𝕒𝕪 (๑′°︿°๑)</div></span>
                <span class="days"><div class="day">♪(^-^ ) 𝔽𝕣𝕚𝕕𝕒𝕪 ( ^-^)♪</div></span>
                <span class="days"><div class="day">٩(˘◡˘)۶ 𝕊𝕒𝕥𝕦𝕣𝕕𝕒𝕪 ٩(˘◡˘)۶</div></span>
                <span class="days"><div class="day">(_ _*)  𝕊𝕦𝕟𝕕𝕒𝕪 (*_ _) </div></span>
            </div>
            <Button onClick={() => history.push('/boba')} size='lrg' variant='dark'>New Boba</Button>
        </>
    )
}
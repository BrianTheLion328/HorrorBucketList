import React from 'react'

export default function BucketList() {

    const listOfStars = (
        <div>
            <ul>
                <li>Kane Hodder (Jason Voorhees)</li>
                <li>Tony Todd (Candyman)</li>
                <li>Danny Trejo (Machete)</li>
                <li>Jonathan Breck (Creeper)</li>
                <li>Malcolm McDowell (Dr. Loomis)</li>
                <li>Ed Neal (Hitchhiker)</li>
                <li>CJ Graham (Jason Voorhees pt. 6)</li>
                <li>Jackie Earl Haley (Freddy Krueger - remake)</li>
                <li>Darren Lynn Bousman (Saw Director)</li>
                <li>Ken Foree (Dawn of the Dead)</li>
                <li>David Howard Thornton (Art the Clown)</li>
                <li>Damien Leone (Terrifier Director)</li>
                <li>Tom Savini (SpecialFX Makeup artist)</li>
                <li>RA Mihailoff (Leatherface)</li>
                <li>Charles Cyphers (Sheriff Brackett)</li>
            </ul>
        </div>
    )

    return (
        <div>
            <h2>Horror Checklist</h2>
            <h4 id="horrorlist">{listOfStars}</h4>

        </div>
    )
}

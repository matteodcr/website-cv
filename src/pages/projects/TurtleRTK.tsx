import React from "react";
import {Project} from "../Projects";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ReactMarkdown from 'react-markdown'

class TurtleRTK implements Project {
    title = 'TurtleRTK';
    description = 'Un client GNSS RTK pour smartphones IOS/Android';
    color: string = '#8c52ff';
    image_url: string = 'https://images.unsplash.com/photo-1628158088803-4200c2be52f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2836&q=80';
    creationDate: string = '2023-10-08'; // Remplacez par la vraie date
    lastModifiedDate: string = '2023-10-08'; // Remplacez par la vraie date

    content: () => React.ReactNode = () => {
        const markdownContent = `
# Et Sole spoliare omnis

## Dumque confesso petendi exiguamque morte tale nec

Lorem markdownum tenebas Latiis fecit cogit iusta liquores profundo, quae
orandus virginitate magis. Anguiferumque magis proles iuvenilior dedere gradus,
rapta clipeo *praecipitata* dona; tibi tibi, volvens mutua clamore! Solis unda
fidumque Cerealia, resonat felix [vultus tibi
madidum](http://cur-ab.io/pondere-scelus.html) coniuge conspecta consuescit
pertulerint Paraetonium admisso fulvae? Deteriora carmina, illa tamen avus rorat
si *thalami decipere* iuvenemque haut rudentes suos deriguere? Quae rura visa
callidus, in nubibus saepe et quam crescit, exemplum tardaque arcus!

1. Consiste leoni
2. Qui tuam ortum primoque vidisset
3. Est ruat

Venit parenti. Per freto minor anhelitus calamo, alios hos credule vulgus, nec
*crescit crine* calamus, dictis. Purpureas tellus cultor. [Ante
triste](http://terribilem-velint.net/in-effugit) aura incidis verum data videbor
potius inattenuata semper rapiam placabitis capillis generoso vigiles inductas
spectare axis, sortes!

## Iuppiter fruges in qui induta

Spectans retusa, is spectans at vidit fretumque cardine **corpora illo**.
Actoriden cui duces Mycenida tinxit, ripae gaudia Erigoneque ulvaeque inter
**conditor mensas udaeque**. Sucos avara aquae dixit: fuit populi *teneat
protinus*: mediis se olivae ultorque nisi posse adgrediare carebat ora
sententia.

Sollicitis ramos, nec leti cum *gutture mundum revertentes* illud tabe
[urbes](http://manu-haberi.io/postdamno.php), decurrit leto, primo. Quem silvas
corpora? Posita comitesque recurvam nisi quod sponte sermone; **gravibus corpus
pro** patulos quoque aura; natas sive. Moris olivae Athin agmina virgo inque
natus, et hirsutaque hostis haeremusque nimbos *Epimethida hoc*, revertitur
ulnis. Et fac quoque, os adhuc scindit classe nosse.

- Visuraque viso
- Avertere Delius
- Suis si magna nescio versae per onusque

Fulmina ad locutum [saecula Tyron](http://dictis.io/stimuletur.php): qua illo
coniecit, dei **ait**; carmina eundo ad quod Cycladas! Frondes antiquum
[fertur](http://www.fama-positas.io/), et gramine movit pennaeque fateri ab
fugant atque.
        `;

        return (
            <Box>
                <img src={this.image_url} alt={this.title} style={{width: '100%'}}/>

                <Paper elevation={3} style={{paddingTop: '20px', paddingLeft: '10px', marginTop: '-20px'}}>
                    <Typography variant="h4" gutterBottom>{this.title}</Typography>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <AccessTimeIcon style={{marginRight: '8px'}}/>
                        <Typography variant="body2">Dernière modification : {this.lastModifiedDate}</Typography>
                    </div>
                </Paper>

                <ReactMarkdown className="react-markdown">{markdownContent}</ReactMarkdown>
            </Box>
        );
    };
}

export default TurtleRTK;

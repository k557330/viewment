import React, { useRef } from 'react'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    ButtonBase,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Typography from "@material-ui/core/Typography"

const OptionItem = ({ dataSet, option, setOption }) => {
    const autoClose = useRef(null)
    const autoClosing = () => autoClose.current.click()

    return (
        <Accordion className="accordion">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordionSummary"
                ref={autoClose}
            >
                <Typography className="accordion-title">{option}</Typography>
            </AccordionSummary>

            {dataSet.map((item, index) =>
                <AccordionDetails key={index} className="accordion-content">
                    <ButtonBase className="accordion-btn" onClick={() => {setOption(item); autoClosing()}} >{item}</ButtonBase>
                </AccordionDetails>
            )}
        </Accordion>
    )
}

export default OptionItem
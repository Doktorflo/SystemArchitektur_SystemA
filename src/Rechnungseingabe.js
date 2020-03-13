import React from 'react';
import './App.css';

const system_b_url = 'http://';

class Rechnungseingabe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vatnr: null,
            country_code: null,
            created_date: null,
            invoice_id: null,
            iban: null,
            bic: null,
            name_seller: null,
            plz_seller: null,
            city_seller: null,
            street_seller: null,
            name_buyer: null,
            plz_buyer: null,
            city_buyer: null,
            street_buyer: null
        };
        this.sendRequest = this.sendRequest.bind(this);
    }

    sendRequest() {
        console.log("Sending data: " + this.state);

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '', true);
        xhr.onload = function (data) {
            console.log("Response Data: " + data)
        };

        xhr.send(JSON.stringify(this.state));

    }

    render() {
        return (
            <div className="App">
                <div id="inputBox" className={"card"}>
                    <p className={"card-header"}>Bitte gib deine Rechnung ein:</p>
                    <div className={"card"}>
                        <input className={"invoicefield"} type={"text"} placeholder={"VAT Nr."} onChange={(e) => this.setState({vatnr: e.target.value})}/>
                        <input className={"invoicefield"} type={"text"} placeholder={"Country Code"} onChange={(e) => this.setState({country_code: e.target.value})}/>
                    </div>
                    <div className={"card"}>
                        <input className={"invoicefield"} type={"text"} placeholder={"IBAN des Verkäufers"} onChange={(e) => this.setState({iban: e.target.value})}/>
                        <input className={"invoicefield"} type={"text"} placeholder={"BIC des Verkäufers"} onChange={(e) => this.setState({bic: e.target.value})}/>
                        <input className={"invoicefield"} type={"text"} placeholder={"Name des Verkäufers"} onChange={(e) => this.setState({name_seller: e.target.value})}/>
                        <input className={"invoicefield"} type={"text"} placeholder={"Postleitzahl des Verkäufers"} onChange={(e) => this.setState({plz_seller: e.target.value})}/>
                        <input className={"invoicefield"} type={"text"} placeholder={"Stadt des Verkäufers"} onChange={(e) => this.setState({city_seller: e.target.value})}/>
                        <input className={"invoicefield"} type={"text"} placeholder={"Straße des Verkäufers"} onChange={(e) => this.setState({street_seller: e.target.value})}/>
                    </div>
                    <div className={"card"}>
                        <input className={"invoicefield"} type={"text"} placeholder={"Name des Käufers"} onChange={(e) => this.setState({name_buyer: e.target.value})}/>
                        <input className={"invoicefield"} type={"text"} placeholder={"Postleitzahl des Käufers"} onChange={(e) => this.setState({plz_buyer: e.target.value})}/>
                        <input className={"invoicefield"} type={"text"} placeholder={"Stadt des Käufers"} onChange={(e) => this.setState({city_buyer: e.target.value})}/>
                        <input className={"invoicefield"} type={"text"} placeholder={"Straße des Käufers"} onChange={(e) => this.setState({street_buyer: e.target.value})}/>
                    </div>
                    <button type={"button"} className={"btn btn-primary"} onClick={this.sendRequest}>Abschicken</button>
                </div>
            </div>);
    }

}

export default Rechnungseingabe;

import './style.scss';

function InformationTable (props) {
    const infoTable = props.info
    // console.log('child B from parent', infoTable) 
    // sort info array according to last name
    infoTable.sort((a,b) => a.userLastname.localeCompare(b.userLastname))

    /* 
        new features: 
        remind duplicate according to phone
        delete feature
    */


    return (
        <table className="table-wrapper">
            <thead>
                <tr >
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                </tr>
            </thead>

            <tbody>
                {/* iterate info to table */}
                {infoTable.map((i,idx) => (
                    <tr key={idx}>
                        <td>{i.userFirstname}</td>
                        <td>{i.userLastname}</td>
                        <td>{i.userPhone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default InformationTable;
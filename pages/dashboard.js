import React, {useEffect} from 'react'
// import dynamic from 'next/dynamic'
import Script from 'next/script'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import VehicleDashForm from '../components/Form/VehicleDashForm';
import DriversDashForm from '../components/Form/DriversDashForm';
import EditCoverageForm from '../components/Form/EditCoverageForm';

const Dashboard = ()=> {

    return (
        <>
       <meta charset="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Dashboard</title>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="./assets/css/account.css"/>
            
             <section className="fill-place dashboard">
        <h1>Welcome back, John Doe.</h1>
        <div className="dashboard-form">
            <div className="selector">
                <div data-tab="1" onClick={()=>{
                   removeActiveFromList('.dashboard .selector .item');
                    removeActiveFromList('.dashboard .screens .screen');
                    addActive('.dashboard .selector .item[data-tab=\'1\']');
                    addActive('.vehicle-drivers');
                }
                    }
                    className="item active">
                    <div className="icon">
                        <img src="./assets/images/dash-icon-car.svg" alt="dash-icon-car"/>
                    </div>
                    <p>CHANGE VEHICLE</p>
                </div>
                <div data-tab="2" onClick="
                    removeActiveFromList('.dashboard .selector .item'); 
                    removeActiveFromList('.dashboard .screens .screen'); 
                    addActive('.dashboard .selector .item[data-tab=\'2\']'); 
                    addActive('.vehicle-drivers');" className="item">
                    <div className="icon">
                        <img src="./assets/images/dash-icon-person.svg" alt="dash-icon-person"/>
                    </div>
                    <p>CHANGE DRIVERS</p>
                </div>
                <div data-tab="3" onClick="
                    removeActiveFromList('.dashboard .selector .item'); 
                    removeActiveFromList('.dashboard .screens .screen'); 
                    addActive('.dashboard .selector .item[data-tab=\'3\']'); 
                    addActive('.change-coverage');" className="item">
                    <div className="icon">
                        <img src="./assets/images/dash-icon-list.svg" alt="dash-icon-list"/>
                    </div>
                    <p>CHANGE COVERAGE</p>
                </div>
                <div data-tab="4" className="item">
                    <div className="icon">
                        <img src="./assets/images/dash-icon-folder.svg" alt="dash-icon-folder"/>
                    </div>
                    <p>FILE CLAIM</p>
                </div>
            </div>

            <div className="screens">
                <div className="screen active vehicle-drivers">
                    <div className="vehicles">
                        <h2>Your Vehicles</h2>

                        <table>
                            <thead>
                                <tr>
                                    <th>Vehicle</th>
                                    <th>Year</th>
                                    <th>Make</th>
                                    <th>Model</th>
                                    <th className="action addVehicle">Add New</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Vehicle #1</td>
                                    <td>2021</td>
                                    <td>Honda</td>
                                    <td>Toyota</td>

                                    <td data-vehicle="1" className="action editVehicle">
                                        <img src="./assets/images/edit.svg" alt="edit"/>
                                    </td>

                                </tr>
                                <tr>
                                    <td>Vehicle #2</td>
                                    <td>2020</td>
                                    <td>BMW</td>
                                    <td>8 Series</td>

                                    <td data-vehicle="2" className="action editVehicle">
                                        <img src="./assets/images/edit.svg" alt="edit"/>
                                    </td>

                                </tr>
                                <tr>
                                    <td>Vehicle #3</td>
                                    <td>2020</td>
                                    <td>BMW</td>
                                    <td>8 Series</td>
                                    <td data-vehicle="3" className="action editVehicle">
                                        <img src="./assets/images/edit.svg" alt="edit"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Vehicle #4</td>
                                    <td>2020</td>
                                    <td>BMW</td>
                                    <td>8 Series</td>
                                    <td data-vehicle="4" className="action editVehicle">
                                        <img src="./assets/images/edit.svg" alt="edit"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Vehicle #5</td>
                                    <td>2020</td>
                                    <td>BMW</td>
                                    <td>8 Series</td>
                                    <td data-vehicle="5" className="action editVehicle">
                                        <img src="./assets/images/edit.svg" alt="edit"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="drivers">
                        <h2>Your Drivers</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Driver</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th className="action addDriver">Add New</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Driver #1</td>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@website.com</td>
                                    <td data-driver="1" className="action editDriver">
                                        <img src="./assets/images/edit.svg" alt="edit"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Driver #2</td>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@website.com</td>
                                    <td data-driver="2" className="action editDriver">
                                        <img src="./assets/images/edit.svg" alt="edit"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Driver #3</td>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@website.com</td>
                                    <td data-driver="3" className="action editDriver">
                                        <img src="./assets/images/edit.svg" alt="edit"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Driver #4</td>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@website.com</td>
                                    <td data-driver="4" className="action editDriver">
                                        <img src="./assets/images/edit.svg" alt="edit"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Driver #5</td>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@website.com</td>
                                    <td data-driver="5" className="action editDriver">
                                        <img src="./assets/images/edit.svg" alt="edit"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="screen change-coverage">
                {/* <div onClick={()=> <EditCoverageForm/>}> */}
                    <h2>Edit Coverage</h2>

                    <form action="" method="" className="home-form">
                      <EditCoverageForm/>

                        {/* <div className="form-group">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Miles You Drive per Year</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Miles You Drive per Year</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Miles You Drive per Year</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Miles You Drive per Year</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Miles You Drive per Year</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Miles You Drive per Year</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Miles You Drive per Year</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Miles You Drive per Year</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Miles You Drive per Year</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Miles You Drive per Year</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Miles You Drive per Year</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Miles You Drive per Year</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Miles You Drive per Year</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Miles You Drive per Year</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input required type="date" name="date" placeholder="Policy Effective Date"/>
                        </div>
                        <div className="form-group nomargin">
                            <span onClick="
                            removeActiveFromList('.dashboard .selector .item'); 
                            removeActiveFromList('.dashboard .screens .screen'); 
                            addActive('.dashboard .selector .item[data-tab=\'1\']'); 
                            addActive('.vehicle-drivers');" className="cancel">CANCEL</span>
                        </div>
                        <div className="form-group nomargin">
                            <input type="submit" value="SAVE"/>
                        </div> */}
                    </form> 


                </div>
                <div className="screen edit-driver edit-driver-screen">
                    <h2>Add New Driver</h2>
                    <span className="remove">Remove</span>


                    <form action="" method="post" className="home-form">
                        <div className="hidden">
                            <input type="text" name="driver-id"/>
                        </div>

                        <DriversDashForm/>
                        {/* <div className="form-group third">
                            <input type="text" name="fname" placeholder="First Name"/>
                        </div>
                        <div className="form-group third">
                            <input type="text" name="lname" placeholder="Last Name"/>
                        </div>
                        <div className="form-group third">
                            <input type="email" name="email" placeholder="Email"/>
                        </div>
                        <div className="form-group third">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Gender</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Gender</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group third">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Marital Status</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Marital Status</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group third">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Own or rent home?</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Own or rent home?</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group half">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Miles You Drive per Year</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Miles You Drive per Year</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group half">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Miles You Drive per Year</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Miles You Drive per Year</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Miles You Drive per Year</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Miles You Drive per Year</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group half nomargin">
                            <span onClick="
                            removeActiveFromList('.dashboard .selector .item'); 
                            removeActiveFromList('.dashboard .screens .screen'); 
                            addActive('.dashboard .selector .item[data-tab=\'1\']'); 
                            addActive('.vehicle-drivers');" className="cancel">CANCEL</span>
                        </div>
                        <div className="form-group half nomargin">
                            <input type="submit" value="ADD"/> */}
                        {/* </div> */}
                    </form>


                </div>
                <div className="screen edit-driver edit-vehicle-screen">
                    <h2>Add New Veicle</h2>
                    <span className="remove">Remove</span>
                    

                    <form action="" method="post" className="home-form">
                        <div data-step="1" className="step information active">
                        <div className="hidden">
                            <input type="text" name="vehicle-id"/>
                        </div>
                    <VehicleDashForm/>
                         </div>
                     </form>

                    {/* <form action="" method="post" className="home-form">
                        <div className="hidden">
                            <input type="text" name="vehicle-id"/>
                        </div>
                        <div className="form-group third">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Year</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Year</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group third">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Make</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Make</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group third">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Model</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Model</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group half">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Style</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Style</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group half">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Existing damage?</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Existing damage?</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group half">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Miles You Drive per Year</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Miles You Drive per Year</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group half">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">Miles You Drive per Year</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">Miles You Drive per Year</div>
                                    <div className="options">
                                        <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                        <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                        <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                        <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                        <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" name="milesperyear" placeholder="How many miles do you drive annualy?"/>
                        </div>
                        <div className="form-group half nomargin">
                            <span onClick="
                            removeActiveFromList('.dashboard .selector .item'); 
                            removeActiveFromList('.dashboard .screens .screen'); 
                            addActive('.dashboard .selector .item[data-tab=\'1\']'); 
                            addActive('.vehicle-drivers');" className="cancel">CANCEL</span>
                        </div>
                        <div className="form-group half nomargin">
                            <input type="submit" value="ADD"/>
                        </div>
                    </form> */}
                </div>
            </div>
        </div>
    </section>
    
    <script src="./assets/js/account.js"></script>
        </>
    )
}
export default Dashboard
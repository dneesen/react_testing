import { useState, useEffect } from 'react';

const useDropdownOptions = () => {
    const [drawingStatusOptions, setDrawingStatusOptions] = useState([]);
    const [projectStatusOptions, setProjectStatusOptions] = useState([]);
    const [projectManagerOptions, setProjectManagerOptions] = useState([]);
    const [mechanicalEngineerOptions, setMechanicalEngineerOptions] = useState([]);
    const [electricalEngineerOptions, setElectricalEngineerOptions] = useState([]);
    const [controlsEngineerOptions, setControlsEngineerOptions] = useState([]);
    const [stationTypeOptions, setStationTypeOptions] = useState([]);
    const [siteVoltageOptions, setSiteVoltageOptions] = useState([]);
    const [stationConfigurationOptions, setStationConfigurationOptions] = useState([]);
    const [powerConfigurationOptions, setPowerConfigurationOptions] = useState([]);
    const [primeSystemOptions, setPrimeSystemOptions] = useState([]);
    const [fccTypeOptions, setFccTypeOptions] = useState([]);
    const [regulatoryComplianceOptions, setRegulatoryComplianceOptions] = useState([]);
    const [stationLocationOptions, setStationLocationOptions] = useState([]);
    const [colorOptions, setColorOptions] = useState([]);
    const [flowMeterLocationOptions, setFlowMeterLocationOptions] = useState([]);
    const [trackerTypeOptions, setTrackerTypeOptions] = useState([]);
    const [electricalEnclosureLocationOptions, setElectricalEnclosureLocationOptions] = useState([]);

    useEffect(() => {
        setDrawingStatusOptions([
            { value: 'pending', label: 'Pending' },
            { value: 'na', label: 'N/A' },
            { value: 'tbd', label: 'TBD' },
            { value: 'approved', label: 'Approved' }
        ]
        );
        setProjectStatusOptions([
            { value: 'engineering_only', label: 'Engineering Only' },
            { value: 'long_leads_only', label: 'Long Leads Only' },
            { value: 'tbd', label: 'TBD' },
            { value: 'release_cso_pending', label: 'Release w/ CSO Pending' },
            { value: 'pending_cso', label: 'Pending CSO' },
            { value: 'on_hold', label: 'On Hold' },
            { value: 'full_release', label: 'Full Release' },
            { value: 'shipped', label: 'Shipped' }
        ]
        );
        setProjectManagerOptions([
            { value: 'ilan_beebe', label: 'Ilan Beebe' },
            { value: 'peter_nelson', label: 'Peter Nelson' },
            { value: 'peter_beaudoin', label: 'Peter Beaudoin' },
            { value: 'mohammad_hamad', label: 'Mohammad Hamad' },
            { value: 'tommy_milanovich', label: 'Tommy Milanovich' },
            { value: 'george_zach', label: 'George Zach' }
        ]
        );
        setMechanicalEngineerOptions([
            { value: 'andrew_casper', label: 'Andrew Casper' },
            { value: 'chris_gabrielson', label: 'Chris Gabrielson' },
            { value: 'kyle_poplar', label: 'Kyle Poplar' },
            { value: 'michael_stark', label: 'Michael Stark' },
            { value: 'mike_fritze', label: 'Mike Fritze' },
            { value: 'na', label: 'N/A' },
            { value: 'neal_verdegan', label: 'Neal Verdegan' },
            { value: 'stephanie_hoover', label: 'Stephanie Hoover' },
            { value: 'tom_lewis', label: 'Tom Lewis' },
            { value: 'vlad_ioffe', label: 'Vlad Ioffe' },
            { value: 'will_t_shull', label: 'Will T. Shull' }
        ]
        );
        setElectricalEngineerOptions([
            { value: 'tiffany_mccune', label: 'Tiffany McCune' },
            { value: 'na', label: 'N/A' },
            { value: 'david_packer', label: 'David Packer' },
            { value: 'cole_griswold', label: 'Cole Griswold' },
            { value: 'leng_xiong', label: 'Leng Xiong' },
            { value: 'randy_poublon', label: 'Randy Poublon' },
            { value: 'houa_thao', label: 'Houa Thao' }
        ]
        );
        setControlsEngineerOptions([
            { value: 'vincent_hallmann', label: 'Vincent Hallmann' },
            { value: 'cory_walgast', label: 'Cory Walgast' },
            { value: 'dave_mohr', label: 'Dave Mohr' },
            { value: 'na', label: 'N/A' }
        ]
        );
        setStationTypeOptions([
            { value: 'vertical_turbine_custom', label: 'Vertical Turbine Custom' },
            { value: 'control_panel', label: 'Control Panel' },
            { value: 'skyharvester', label: 'SkyHarvester' },
            { value: 'watermax_5000', label: 'Watermax 5000' },
            { value: 'watermax_7000', label: 'Watermax 7000' },
            { value: 'horizontal_centrifugal', label: 'Horizontal Centrifugal' },
            { value: 'vertical_turbine_standard', label: 'Vertical Turbine Standard' },
            { value: 'vertical_multistage', label: 'Vertical Multistage' },
            { value: 'watermax_9000', label: 'Watermax 9000' }
        ]
        );
        setSiteVoltageOptions([
            { value: '400vac_3phase_60hz', label: '400VAC/3Phase/60Hz' },
            { value: '240vac_1phase_60hz', label: '240VAC/1Phase/60Hz' },
            { value: '460vac_3phase_60hz', label: '460VAC/3Phase/60Hz' },
            { value: '480y_277volt_3phase_60hz_only', label: '480Y/277 volt, 3Phase/60Hz only' },
            { value: '230vac_3phase_60hz', label: '230VAC/3Phase/60Hz' },
            { value: '230vac_1phase_60hz', label: '230VAC/1Phase/60Hz' },
            { value: '415vac_3phase_50hz', label: '415VAC/3Phase/50Hz' },
            { value: '240vac_3phase_60hz', label: '240VAC/3Phase/60Hz' },
            { value: '380vac_3phase_50hz', label: '380VAC/3Phase/50Hz' },
            { value: '208vac_3phase_60hz', label: '208VAC/3Phase/60Hz' }
        ]
        );
        setStationConfigurationOptions([
            { value: 'booster', label: 'Booster' },
            { value: 'suction_lift', label: 'Suction Lift' },
            { value: 'flooded_suction', label: 'Flooded Suction' },
            { value: 'na', label: 'N/A' }
        ]
        );
        setPowerConfigurationOptions([
            { value: 'open_delta_high_leg_delta', label: 'Open DELTA/High Leg DELTA' },
            { value: 'unknown', label: 'Unknown' },
            { value: 'wye_1phase_3_wire', label: 'WYE(1ϕ) 3 Wire' },
            { value: 'unbalanced', label: 'UNBALANCED' },
            { value: 'generator', label: 'GENERATOR' },
            { value: 'wye_3phase_4_wire', label: 'WYE(3ϕ) 4 Wire' },
            { value: 'delta_3phase_4_wire_stinger', label: 'DELTA(3ϕ) 4 Wire w/ STINGER' },
            { value: 'delta_3phase_4_wire', label: 'DELTA(3ϕ) 4 Wire' },
            { value: 'na', label: 'N/A' }
        ]
        );
        setPrimeSystemOptions([
            { value: 'na', label: 'N/A' },
            { value: 'tbd', label: 'TBD' },
            { value: 'vacuum_prime', label: 'Vacuum Prime' },
            { value: 'automatic_prime', label: 'Automatic Prime' },
            { value: 'positive_prime', label: 'Positive Prime' }
        ]
        );
        setFccTypeOptions([
            { value: 'd', label: 'D' },
            { value: 'none', label: 'None' },
            { value: 'a', label: 'A' },
            { value: 'b', label: 'B' },
            { value: 'e', label: 'E' },
            { value: 'c', label: 'C' }
        ]
        );
        setRegulatoryComplianceOptions([
            { value: 'ul_listed_packaged_pumping_system', label: 'UL Listed Packaged Pumping System' },
            { value: 'tbd', label: 'TBD' },
            { value: 'ul_listed_industrial_control_panel', label: 'UL Listed Industrial Control Panel' }
        ]
        );
        setStationLocationOptions([
            { value: 'inside_weather_resistant_building', label: 'Inside - Weather Resistant Building' },
            { value: 'outside_under_canopy', label: 'Outside - Under Canopy' },
            { value: 'outside', label: 'Outside' },
            { value: 'tbd', label: 'TBD' }
        ]
        );
        setColorOptions([
            { value: 'sandstone_pipe_only', label: 'Sandstone - Pipe Only' },
            { value: 'tbd', label: 'TBD' },
            { value: 'other_see_comments', label: 'Other (See Comments)' },
            { value: 'blue', label: 'Blue' },
            { value: 'green_pipe_only', label: 'Green - Pipe Only' },
            { value: 'na', label: 'N/A' },
            { value: 'same_as_station', label: 'Same as Station' },
            { value: 'green', label: 'Green' },
            { value: 'sandstone', label: 'Sandstone' },
            { value: 'purple', label: 'Purple' }
        ]
        );
        setFlowMeterLocationOptions([
            { value: 'on_station_skid', label: 'On Station Skid' },
            { value: 'off_skid', label: 'OFF Skid' }
        ]
        );
        setTrackerTypeOptions([
            { value: 'hc', label: 'HC' },
            { value: 'vt', label: 'VT' }
        ]);
        setElectricalEnclosureLocationOptions([
        { value: 'on_station_skid', label: 'On Station Skid' },
        { value: 'off_skid', label: 'OFF Skid' }
        ]);
    }, []);

    return {
        drawingStatusOptions,
        projectStatusOptions,
        projectManagerOptions,
        mechanicalEngineerOptions,
        electricalEngineerOptions,
        controlsEngineerOptions,
        stationTypeOptions,
        siteVoltageOptions,
        stationConfigurationOptions,
        powerConfigurationOptions,
        primeSystemOptions,
        fccTypeOptions,
        regulatoryComplianceOptions,
        stationLocationOptions,
        colorOptions,
        flowMeterLocationOptions,
        trackerTypeOptions,
        electricalEnclosureLocationOptions
    };
};

export default useDropdownOptions;

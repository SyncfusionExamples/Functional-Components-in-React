import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PageSettingsModel, Sort, SortSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import Home from './Home';

export default class App extends React.Component<{}, {}>{
    public pageSettings: PageSettingsModel = { pageSize: 6 }
    public sortSettings: SortSettingsModel = { columns: [
                            {field: 'EmployeeID', direction: 'Ascending' }
                        ] };
    public render() {
        return  <div> <Home/> <br /> <br /> <p>Grid-2 using Class Components</p>
        <GridComponent dataSource={data} allowPaging={true} pageSettings={ this.pageSettings }
            allowSorting={true} sortSettings={ this.sortSettings }>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
                <ColumnDirective field='CustomerID' width='100'/>
                <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
                <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
                <ColumnDirective field='ShipCountry' width='100'/>
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group]} />
        </GridComponent> </div> 
        
    }
};
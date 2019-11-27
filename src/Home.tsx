import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Filter, Group, Inject, Page,PageSettingsModel, Sort ,SortSettingsModel} from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { sdata } from './datasource';


function Home() {
    const pageSettings:PageSettingsModel =  { pageSize: 6 };
    const sortSettings:SortSettingsModel = { columns: [
        {field: 'EmployeeID', direction: 'Ascending' }
    ] };
    return(<div> <p>Grid-1 using Functional Components</p>
    <GridComponent dataSource={sdata} allowPaging={true} pageSettings={ pageSettings }
            allowSorting={true} sortSettings={ sortSettings }>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
                <ColumnDirective field='CustomerID' width='100'/>
                <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
                <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
                <ColumnDirective field='ShipCountry' width='100'/>
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group]} />
        </GridComponent> 
        </div>
)
    }

export default Home;
# React - Funtional Components

A Functional Component accepts props as an argument and returns a React element. We cannot use ref on functional components in React because the Functional components do not have instances. A functional component is merely like a plain JavaScript function  cannot have an instance. They also called as stateless components because they do not have lifecycle methods of React. 

## Create a React application

To create a React application, refer to [`getting started`](https://ej2.syncfusion.com/react/documentation/grid/getting-started/#enable-sorting) document.

## App component 

In `App.tsx` file, create the Syncfusion Grid component using Class component.

Code snippet of `App.tsx` file:

```typescript
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

```

## Home Component

In `Home.tsx` file, create the Syncfusion Grid component using Functional component.

Code snippet of `Home.tsx` file:

```typescript
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

 ```

## Build and Run the Application

``` bash
# install dependencies
npm install

# build the application 
npm run build

# run the application
npm run start

```

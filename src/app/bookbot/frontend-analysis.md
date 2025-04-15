# Book listing analysis

## Philosophy of the development analysis

To ensure effective allocation of resources, I chose an MVP (Minimum Viable Product) first implementation, which allows for fast delivery of the product to the user.
When the product reaches the user, we can measure whether the hypothesized goal of the effort was achieved, and based on the metrics, we can prioritize and adjust the following steps.
Functionality that can be omitted in the first (MVP) phase was analyzed, and a note regarding its priority was added.

## Analysis

### 1. Design review

As a design for the analysis, I used the current page - [https://bookbot.com/p](https://bookbot.com/p)

![](./assets/Site.png)

### 2. Component preparation

As I noticed that the current page - [https://bookbot.com/p](https://bookbot.com/p) - uses the (styled) Material UI library. The components that were not present in the prerequisites include a link to a component that could be used to achieve the desired result.
When creating the components, consideration for older browsers should be taken into account.

#### List of components:

A rough componentized version of the page:
![](./assets/Componentized.png)
Not all components are present (as some are under the fold) but all of the ones that can be found are analyzed below:

##### Site header section

###### SiteHeader

- Already prepared (as defined in the prerequisites).

###### Breadcrumbs

- If already present with SiteHeader, only adding props should be necessary during the Page Preparation step.

![](./assets/SiteHeader.png)

##### Filter sidebar section

###### Accordion - Filter title

- Title of the filtered parameter
- Clicking on the title will collapse the filter category
- [https://mui.com/material-ui/react-accordion/](https://mui.com/material-ui/react-accordion/)

![](./assets/Accordion.png)

###### TextInput

- For searching the current filter parameter
- Can be omitted in MVP
- [https://mui.com/material-ui/react-text-field/](https://mui.com/material-ui/react-text-field/)

![](./assets/TextInput.png)

###### CheckboxList

- For list filters - genre, book condition, author, …
- Clicking on it will change the path and new data will be loaded (data fetching section)
- [https://mui.com/material-ui/react-list/\#checkbox](https://mui.com/material-ui/react-list/#checkbox)

![](./assets/CheckboxList.png)

###### Slider

- For range filters - price, …
- Debounced, onBlur change the path and new data will be loaded (data fetching section)
- [https://mui.com/material-ui/react-slider/](https://mui.com/material-ui/react-slider/)

![](./assets/Slider.png)

###### NumberInput

- For range filters where a slider would be cumbersome - year of publication, …
- Debounced, after debounce change the path and new data will be loaded (data fetching section)

![](./assets/NumberInput.png)

###### Drawer

- For mobile view, will be opened after the filter button is clicked
- [https://mui.com/material-ui/react-drawer/](https://mui.com/material-ui/react-drawer/)

![](./assets/Drawer.png)

##### Product section header

###### Tag

- To indicate currently selected filters
- Clicking on them would clear the clicked filter
- [https://mui.com/material-ui/react-chip/](https://mui.com/material-ui/react-chip/)

![](./assets/Tag.png)

###### Button

- To be used with active filter tags and in some filter options
- For clearing active filters
- Variants (primary, destructive, medium, large, ...)
- With optional Icon prefix or suffix
- [https://mui.com/material-ui/react-button/](https://mui.com/material-ui/react-button/)

![](./assets/Buttons.png)

###### Select

- To be used in sorting
- Selecting a new sorting changes the path and new data will be loaded (data fetching section)
- [https://mui.com/material-ui/react-select/](https://mui.com/material-ui/react-select/)

![](./assets/Select.png)

##### Product section grid

###### ProductCard

- already prepared (as defined in prerequisited)

![](./assets/ProductCard.png)

###### Pagination

- Clicking on different page changes the path and new data will be loaded (data fetching section)
- [https://mui.com/material-ui/react-pagination/](https://mui.com/material-ui/react-pagination/)

![](./assets/Pagination.png)

### 3. Page preparation

Create a page with a custom number of filters in the path parameters (for better SEO).
In the App Router, this would be achieved like so: `/app/p/[[...filters]]/page.tsx`

Create a responsive layout for the page:

Mobile layout:
![](./assets/MobileLayout.png)

Desktop layout:
![](./assets/DesktopLayout.png)

Layout consists of:

- SiteHeader
  - Already prepared as specified in the prerequisites
- FilterSidebar / FilterSection
  - Section within `<main>` tag, tag that contains filters selectable by the user
  - On the mobile layout, this would be a button that opens a drawer containing the same content as the `FilterSidebar`
- ProductSection
  - Section within the `<main>` tag, that includes information about the currently selected tags, sorting options, and, most importantly, the product grid
- Footer

The base layout of the page will remain the same. The prepared SiteHeader will be used at the top of the layout. The `<main>` tag will contain both the `FilterSidebar` / `FilterSection` and the ProductSection.

- On mobile layout, the `<main>` tag will be structured as one column and two rows
- On desktop layout, it will have two columns and one row.

### 4. Data fetching

Assume a singular endpoint that returns data for this page based on the provided filters.

This endpoint will likely return the following:

- Items – A list of books with the necessary parameters (e.g., price, author).
- Filters – Possible filter options to be displayed in the FilterSidebar section.
- Pagination – Information about the total number of pages, current page, etc.

Create a data-fetching function that takes in a list of filters (including filter values, page number, and sorting options) as input – ideally from the URL path – and returns the fetched data from the server.
This function should run:

- When the page is server-side rendered.
- When the user changes the filters client-side.

A unit test for correct application of the filters to the data fetching function.

### 5. Connecting components to data

There will be two categories of components that need to be connected - mutating and reading components, and purely reading components:

Mutating and Reading - `FilterSidebar` components + sorting component

- Change the current path – the data-fetching function should react to this
- After the data is fetched, update the information in the filters based on the response

Reading only - `ProductSection` components

- When the data is loaded, update the displayed books accordingly

#### Watchdog

A watchdog mutation can be added after MVP phase, which would send to an endpoint data about the currently selected filters and inputed (or current user's) email.

### 6. SEO

To rank well in the search engine results, some attention should be paid to SEO in the page. Correct page titles should be generated, as well as other metadata and some combinations should be generated into the sitemap for better indexing of commonly searched book categories.

### 7. Analytics

Tracking of key user actions should be added, so that we know how much and how well the page is used by the users. Events like changes in filters or sorting, conversions and time to discovery should be tracked, so that the effect of future optimizations can be measured

### 8. Future improvements

- Searching the filter options
  - In the first phase searching the filters [as seen in TextInput](#textinput) can be omitted and added in future iterations
- Improve loading states
  - When changing the filters a more user friedly loading state can be displayed, for example disabling only specific parts of the UI, usage of skeletons, etc.
- Watchdog mutations
  - Registering the current filters to a watchdog [as seen on the web page](#analysis) is not a blocking requirement for the release of product listing page

## [Unreleased]

## [1.0.0] - 2022-12-15

### Added

- FirstComponent
- ProductComponent
- ProductListComponent
- ProductService
- CartService
- CartListComponent

### Refactored

- Realisation by functionality instead of by entities.

## [1.0.1] - 2021-12-19

### Added

- CartItemComponent

### Refactored

- Communication between ProductList and Product components using input/output
- IProductModel replaced by Product
- CartService
- CartListComponent
- @Inputs for for Product properties replaced by one single @Input for total object

## [1.0.2] - 2021-12-26

### Added

- CartObsevableService
- Shared Module
- Directives Highlight, Drawborder in SharedModule

### Refactored

- CartModel
- CartList and ProductList using push strategy
- AppComponent

## [1.0.3] - 2021-01-26

### Added

- CoreModule incl ConfigModel, ConfigService, ConstantService, GeneratorService,
  GeneratorFactory, genID, LocalStorageService

### Refactored

- CartService and CartComponent using getters for total values

## [1.0.4] - 2021-02-01

### Refactored

- CartObservabelService updated by using tuple
- products.json replaced by products.ts

### Added

- currency built-in pipe in CartComponent, ProductComponent.
- uppercase build-in pipe in CartComponent
- getProducts realisation using promise approach and using async pipe in product list template

## [1.0.5] - 2021-02-02

### Added

- OrderByPipe

## [1.0.6] - 2021-02-12

### Added

- getProducts realisation using observable approach and using async pipe in product list template

### Refactored

- products.ts replaced by products.json
- added id to ProductModel and CartItemModel
- CartService renamed to CartArrayService
- CartPushService renamde to CartObservableService
- Updated CartObservableService

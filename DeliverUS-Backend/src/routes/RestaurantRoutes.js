import RestaurantController from '../controllers/RestaurantController.js'

const loadFileRoutes = function (app) {
  app.route('/restaurants').get(RestaurantController.index)
  app.route('/restaurants/:restaurantId').get(RestaurantController.show)
  
  app.route('/restaurants').post(RestaurantController.create)
  //app.route('/restaurants/:restaurantId').get(RestaurantController.show) No se puede hacer porque la función no está implementada en el controller
  app.route('/restaurants/:restaurantId').put(RestaurantController.update)
  app.route('/restaurants/:restaurantId').delete(RestaurantController.destroy)

}
export default loadFileRoutes

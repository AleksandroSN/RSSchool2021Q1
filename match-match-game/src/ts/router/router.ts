export class Router {
  private static instance: Router;

  private routes: Array<{ name: string; component(): void }>;

  constructor() {
    this.routes = [];
  }

  public static getInstance(): Router {
    if (!Router.instance) {
      Router.instance = new Router();
    }

    return Router.instance;
  }

  addRoute(arr: Array<{ name: string; component(): void }>) {
    arr.forEach((route) => this.routes.push(route));
  }

  onloadRoute() {
    window.location.hash = "about";
    const deffaultRoute = this.routes.find((route) => route.name === "about");
    if (!deffaultRoute) throw new Error("Deffault route not find");
    deffaultRoute.component();
  }

  navigate() {
    const currentRouteName = window.location.hash.slice(1);
    const currentRoute = this.routes.find(
      (route) => route.name === currentRouteName
    );
    if (!currentRoute) throw new Error("Current route not find");
    currentRoute.component();
  }
}

import { RouteRecordName, RouteRecordRaw } from "vue-router";

export interface IRoute {
  name: RouteRecordName | undefined;
  path: string;
  label?: unknown;
}

function mapRoute(route: readonly RouteRecordRaw[], routes: IRoute[]) {
  route.forEach(({ children, name, path, meta }) => {
    if (children && children.length) {
      mapRoute(children, routes);
    } else {
      const label = meta?.label;
      routes.push({ name, path, label });
    }
  });
  return routes;
}

function getAllRoute(): IRoute[] {
  const Router = useRouter();
  console.log(Router.options.routes);

  const routes: IRoute[] = [];
  return mapRoute(Router.options.routes, routes);
}

export default getAllRoute;

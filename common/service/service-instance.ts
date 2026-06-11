import { RouteService } from "@/implement/RouteService";
import { ToastService } from "@/implement/ToastService";
import { DeviceService } from "@/implement/DeviceService";

export const toastServiceInstance = new ToastService();
export const routerServiceInstance = new RouteService();
export const deviceServiceInstance = new DeviceService();
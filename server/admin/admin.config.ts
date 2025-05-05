import { AdminRepository } from "@/admin/admin.repository";
import { AdminService } from "@/admin/core/service/admin.service";
import { AdminController } from "@/admin/admin.controller";

const adminRepository = new AdminRepository();

const adminService = new AdminService(adminRepository);

export const adminController = new AdminController(adminService);
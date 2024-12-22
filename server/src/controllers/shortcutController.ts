import { Request, Response } from 'express';
import { Application } from '../models/Shortcut';

export const shortcutController = {
   async getShortcuts(req: Request, res: Response) {
      try {
         const app = await Application.findOne({ name: 'default' });
         if (!app) {
            return res.json([]);
         }
         res.json(app.shortcuts);
      } catch (error) {
         res.status(500).json({ message: 'Error fetching shortcuts', error });
      }
   },

   async saveShortcuts(req: Request, res: Response) {
      try {
         const { shortcuts } = req.body;
         let app = await Application.findOne({ name: 'default' });

         if (!app) {
            app = await Application.create({
               name: 'default',
               shortcuts: shortcuts
            });
         } else {
            app.shortcuts = shortcuts;
            await app.save();
         }

         res.json(app.shortcuts);
      } catch (error) {
         res.status(500).json({ message: 'Error saving shortcuts', error });
      }
   }
};
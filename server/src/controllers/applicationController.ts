import { Request, Response } from 'express';
import { Application } from '../models/Application';

export const applicationController = {
   // Get all applications with their shortcuts
   async getAllApplications(req: Request, res: Response) {
      try {
         const applications = await Application.find();
         res.json(applications);
      } catch (error) {
         res.status(500).json({ message: 'Error fetching applications', error });
      }
   },

   // Create new application
   async createApplication(req: Request, res: Response) {
      try {
         const newApplication = await Application.create({
            ...req.body,
            shortcuts: req.body.shortcuts || []
         });
         res.status(201).json(newApplication);
      } catch (error) {
         res.status(400).json({ message: 'Error creating application', error });
      }
   },

   // Add shortcut to application
   async addShortcut(req: Request, res: Response) {
      try {
         const { id } = req.params;
         const application = await Application.findByIdAndUpdate(
            id,
            { $push: { shortcuts: req.body } },
            { new: true }
         );

         if (!application) {
            return res.status(404).json({ message: 'Application not found' });
         }

         res.json(application);
      } catch (error) {
         res.status(400).json({ message: 'Error adding shortcut', error });
      }
   },

   // Delete shortcut from application
   async deleteShortcut(req: Request, res: Response) {
      try {
         const { appId, shortcutId } = req.params;
         const application = await Application.findByIdAndUpdate(
            appId,
            { $pull: { shortcuts: { _id: shortcutId } } },
            { new: true }
         );

         if (!application) {
            return res.status(404).json({ message: 'Application not found' });
         }

         res.json(application);
      } catch (error) {
         res.status(400).json({ message: 'Error deleting shortcut', error });
      }
   }
};
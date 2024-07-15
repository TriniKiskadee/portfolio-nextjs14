'use server'

import {client} from '@/lib/prisma'

export const getAllProjects = async () => {
    try {
        const  allProjects = await client.project.findMany()

        if(allProjects) {
            return allProjects
        }
    } catch (error: any) {
        console.log('Error fetching project data', error)
    }
}
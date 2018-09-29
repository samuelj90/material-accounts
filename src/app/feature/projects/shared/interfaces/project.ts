export interface Project {
    id: number;
    title: string;
    customer_id: string;
    description: string;
    start_date: string;
    end_date: string;
    status_id: string;
    remarks: string;
    created_date: string;
    created_by: string;
    last_modified_date?: any;
    last_modified_by: string;
}

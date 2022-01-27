export class CommonEvent extends Event
{
    public data?:any;
    public count?:number
    public static MODEL_LOAD_COMPLETE = "model_load_complete"
    public static MODEL_COUNT_COMPLETE = "model_count_complete"
    public static MODEL_DOWNLOAD_COMPLETE = "model_download_complete"
    public static MODEL_DELETE_COMPLETE = "model_delete_complete"
    public static MODEL_EDIT_COMPLETE = "model_edit_complete"
    public static MODEL_GET_COMPLETE = "model_get_complete"
}

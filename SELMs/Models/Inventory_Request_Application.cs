//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SELMs.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Inventory_Request_Application
    {
        public int application_id { get; set; }
        public string application_code { get; set; }
        public string requester { get; set; }
        public Nullable<System.DateTime> request_date { get; set; }
        public string performer { get; set; }
        public Nullable<decimal> total_equipment { get; set; }
        public string status { get; set; }
    }
}

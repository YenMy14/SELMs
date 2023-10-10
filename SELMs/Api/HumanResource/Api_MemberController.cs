using Dapper;
using SELMs.Models;
using SELMs.Models.BusinessModel;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Http;
//using System.Web.Mvc;

namespace SELMs.Api.HumanResource
{
    public class Api_MemberController : ApiController
    {
        private SELMsEntities db = new SELMsEntities();
        // GET: Api_Member
        #region Danh sách khách hàng
        [HttpPost]
        [Route("api/Api_Member/GetMembersList")]
        public dynamic GetListKhachHang(ThamSo thamso)
        {
            dynamic returnedData = null;
            returnedData = db.Database.Connection.Query<dynamic>("Proc_GetMembersList", new
            {
                username = thamso.username,
                

            }
            , commandType: CommandType.StoredProcedure).ToList();

            return returnedData;
        }
        #endregion
    }
}
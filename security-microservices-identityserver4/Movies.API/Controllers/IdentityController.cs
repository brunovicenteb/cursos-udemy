using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Movies.API.Model;

namespace Movies.API.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize]
public class IdentityController : ControllerBase
{

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        await Task.CompletedTask;
        return new JsonResult(from c in User.Claims select new { c.Type, c.Value });
    }
}
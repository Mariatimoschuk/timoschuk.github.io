// Controllers/ContactsController.cs
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

public class ContactsController : Controller
{
    private static List<Contact> _contacts = new List<Contact>
    {
        new Contact { Id = 1, Name = "John Doe", PhoneNumber = "123-456-7890" },
        new Contact { Id = 2, Name = "Jane Smith", PhoneNumber = "987-654-3210" }
    };

    public IActionResult Index()
    {
        return View(_contacts);
    }

    public IActionResult Create()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Create(Contact contact)
    {
        contact.Id = _contacts.Count > 0 ? _contacts.Max(c => c.Id) + 1 : 1;
        _contacts.Add(contact);
        return RedirectToAction("Index");
    }

    public IActionResult Delete(int id)
    {
        var contactToDelete = _contacts.FirstOrDefault(c => c.Id == id);
        if (contactToDelete != null)
        {
            _contacts.Remove(contactToDelete);
        }
        return RedirectToAction("Index");
    }
}
namespace PintaAPI.Models
{
    public class Place
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Location { get; set; }
        public bool WeekdaysOnly { get; set; }
    }
}
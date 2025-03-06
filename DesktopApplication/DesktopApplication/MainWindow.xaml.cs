using Microsoft.EntityFrameworkCore;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Threading;
using UserManagementApp;

namespace DesktopApplication
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {

        private readonly DispatcherTimer _refreshTimer = new DispatcherTimer();
        public MainWindow()
            {
                InitializeComponent();
                LoadData();
            _refreshTimer.Interval = TimeSpan.FromSeconds(5);
            _refreshTimer.Tick += (s, e) => LoadData();
            _refreshTimer.Start();
        }

            private void LoadData()
            {
            using var context = new ApplicationDbContext();
            context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking; // Disable caching
            UserGrid.ItemsSource = context.Users.AsNoTracking().ToList(); // Force fresh load
            UserGrid.Items.Refresh(); // Explicitly refresh the DataGrid
        }

            private void AddButton_Click(object sender, RoutedEventArgs e)
            {
                var dialog = new AddEditUserWindow();
                if (dialog.ShowDialog() == true)
                {
                    using var context = new ApplicationDbContext();
                    context.Users.Add(dialog.User);
                    context.SaveChanges();
                    LoadData();
                }
            }

            private void ModifyButton_Click(object sender, RoutedEventArgs e)
            {
                if (UserGrid.SelectedItem is User selectedUser)
                {
                    var dialog = new AddEditUserWindow(selectedUser);
                    if (dialog.ShowDialog() == true)
                    {
                        using var context = new ApplicationDbContext();
                        context.Users.Update(dialog.User);
                        context.SaveChanges();
                        LoadData();
                    }
                }
            }

            private void DeleteButton_Click(object sender, RoutedEventArgs e)
            {
                if (UserGrid.SelectedItem is User selectedUser)
                {
                    using var context = new ApplicationDbContext();
                    context.Users.Remove(selectedUser);
                    context.SaveChanges();
                    LoadData();
                }
            }

        private void RefreshButton_Click(object sender, RoutedEventArgs e)
        {
            LoadData();
        }
    }
    
}
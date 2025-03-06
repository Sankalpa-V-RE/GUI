using System.Windows;

namespace UserManagementApp
{
    public partial class AddEditUserWindow : Window
    {
        public User User { get; private set; }

        public AddEditUserWindow(User existingUser = null)
        {
            InitializeComponent();
            if (existingUser != null)
            {
                User = existingUser;
                NameTextBox.Text = User.username;
                EmailTextBox.Text = User.email;
                PasswordBox.Password = User.password;
            }
            else
            {
                User = new User();
            }
        }

        private void SaveButton_Click(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(NameTextBox.Text) ||
                string.IsNullOrWhiteSpace(EmailTextBox.Text) ||
                string.IsNullOrWhiteSpace(PasswordBox.Password))
            {
                MessageBox.Show("Please fill all fields");
                return;
            }

            User.username = NameTextBox.Text;
            User.email = EmailTextBox.Text;
            User.password = PasswordBox.Password;

            DialogResult = true;
            Close();
        }
    }
}
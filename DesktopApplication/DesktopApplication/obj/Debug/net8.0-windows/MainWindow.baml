   M S B A M L   `   `   `  ����M  IDesktopApplication, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null7 clr-namespace:DesktopApplicationDesktopApplication  5   	   #    DesktopApplication.MainWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   2local clr-namespace:DesktopApplication     5   	     � Title$  User Management System��5   	   $	��600��5	   	   $
��1000��6    � WindowStartupLocation$ CenterScreen=�5
   	   $��Segoe UI)�5   	    � 	Resources 5       �� 
TargetType �� Property �� Value �� 
StartPoint �� EndPoint � Color	 � Offset
 �� 
TargetType ��Name �� CornerRadius �� Triggers P� Property P� Value �� 
TargetName&   System.Windows.Controls.DataGrid=  7System.Windows.Controls.Primitives.DataGridColumnHeader3  -System.Windows.Media.Effects.DropShadowEffect   ShadowEffect   
BlurRadius   Opacity   ShadowDepth��%�  '��       '  E    '  n    &	  U    �� 5   
   " ��6   .�5      ��  � ��$ 8q�6'   �� 5       � ��$
 12 6q�6(   �� 5       � ��$ 14(�6)   �� 5       � ��
 �����6+   �� 5       � ��$ 0q�60   �� 5       �@�Cursor$
 Hand��6'   �� 5       � �� 5      �� 5      $	 0,0&�6*   $	 0,1&�6;   .��5      � $ #FAB115��6'   $	 0Q�67   � 5      $ #f39c12��6'   $	 1Q�67   5      5      �� 5       � �� 5      �� 5       "
 ��6&   .R�5!      �� $ border��6!   $ 4��5"   !   #��z��5#   !   #��z��5$   !   #��z��5%   !   ._�5&      �� $��Center=�6/   $��Center=�5'   /   5(       5)      P� 5*       �@J�IsMouseOver$
 True��6=   . �5+   "   �� $ border��6)    � �� 5,   &   �� 5-   *   $	 0,0&�6>   $	 0,1&�6O   .��5.   .   � $ #FFC445��6;   $	 0Q�6K   � 5/   .   $ #F0A920��6;   $	 1Q�6K   50   +   52   #   53      P� 54       � ��$
 True��6;   . �55   "   �� $ border��6)    � �� �#E89E106S   56      58      5:      5;      �� 5=   
   "  6   .�5>      ��  �@ HeadersVisibility$ Column=�62   �� 5?       �@ AutoGenerateColumns$ False��64   �� 5@       � ��$ 10q�6'   �� 5A       � ��$ 0q�60   �� 5B       � �� �#FFF9F26+   �� 5C       �@ RowBackground
 �����6.   �� 5D        �@ AlternatingRowBackground �#FFF5E969   �� 5E       � ��$ 14(�6)   �� 5F       �@ VerticalGridLinesBrush �#FFEEDD67   �� 5G        �@ HorizontalGridLinesBrush �#FFEEDD69   5H      �� 5J   
   "  6   .�5K      ��  � �� �#f39c126+   �� 5L       � ��
 �����6+   �� 5M       � ��$ SemiBold"�6+   �� 5N       � ��$
 12 8q�6(   �� 5O       � ��$ 0q�60   5P        5R   
   $ 10Q�60   $	 0.1Q�6@   $ 2Q�6N   5S      .��5U      � ���#FFFDFA � RowDefinitions 5V   
   �� 5W      $
��Auto �6   �� 5X      $��* �6   �� 5Y      $
��Auto �6   .+�5]   
   �� $��0��6   ���#e67e22 �� Padding$ 20 15q�63   ._�5^      �� $!��👥 User Management System��6   $��24(�5_      $
��Bold"�6&   
�������$��Center=�5`   +   5a      � 5d   
   $��1��6    � ColumnDefinitions 5e      �� 5f      $
��Auto �6#   �� 5g      $��* �6#   .+�5k      �� $��0��6   
�������$ 10q�68   $��10 0 0 0q�5l      $ 8��6'    J� Effect# [  5m      ._�5n      �� $	��Top=�6   $��Center=�65   .+�5o      �� -   5        $��➕ Add User��5o      $	��160��62   6>   �� 5p      -   5        $��✏️ Edit User��5p      $	��160��64   6@   �� 5q      -   5        $��🗑️ Delete User��5q      $	��160��67   6C   �� 5r      -   5        $��🔄 Refresh Data��5r      $	��160��67   $��0 20 0 0q�5s      ���#EEE���#666���#DDD$��1q�5t   0   5u      5v        5y      -   5          Name$ UserGrid��5y      $��1��6)   $��Stretch=�5z      $��Stretch=�63      AutoGenerateColumns$ False��5{         CanUserAddRows$ False��63      
IsReadOnly$
 True��5|         SelectionUnit$ FullRow=�6)      Columns 5}      0  *System.Windows.Controls.DataGridTextColumn  5~      ,  &System.Windows.Controls.DataGridColumn   Header$ User ID��6)      Width5  /System.Windows.Controls.DataGridLengthConverter$
 Auto 6U   1  +System.Windows.Controls.DataGridBoundColumn    Binding  6:   �� *userid+6U     5      $ Username��6)     6;   �� *
username+  5�      $ Email��6)     68   �� *email+  5�      $ Password��6)     6;   �� *
password+5�      5�      �� 5�   
   $��2��6   ���#FFF5E9$ 10q�63   ._�5�      �� $��🍔 Find and Feast 🍦��6   $��14(�5�      $��Italic$�6&   $��Center=�5�      ���#66665   5�      5�      5�      
class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :full_name
      t.string :gender 
      t.string :age
      t.string :occupation
      t.string :phone
      t.timestamps
    end
  end
end

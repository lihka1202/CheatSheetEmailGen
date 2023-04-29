class CreateRailsDocuments < ActiveRecord::Migration[7.0]
  def change
    create_table :rails_documents do |t|

      t.timestamps
    end
  end
end

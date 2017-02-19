# enconding: utf-8
# API
# ContactsController
class Api::V1::ContactsController < Api::V1::ApiController
  before_action :set_contact, only: [:show, :update, :destroy]

  def index
    @contacts = Contact.all.order(created_at: :desc)
  end

  def show
  end

  def create
    @contact = Contact.new(params_contact)
    if @contact.save
      render template: 'api/v1/contacts/show'
    else
      render json: {error: @contact.errors}, status: :unprocessable_entity
    end
  end

  def update
    if @contact.update(params_contact)
      render template: 'api/v1/contacts/show'
    else
      render json: {error: @contact.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    if @contact.destroy
      render json: {message: 'Deleted successfully'}, status: 200
    else
      render json: {error: 'Error to delete a contact'}, status: :unprocessable_entity
    end
  end

  private
  def set_contact
    if Contact.where(id: params[:id]).first.nil?
      render json: { error: 'Contact not found' }, status: :unprocessable_entity
    else
      @contact = Contact.find(params[:id])
    end
  end

  def params_contact
    params.require(:contact).permit(:name, :phone_number, :email)
  end
end

# enconding: utf-8
# API
# PadsController
class Api::V1::PadsController < Api::V1::ApiController
  before_action :set_pad, only: [:show, :update, :destroy]

  def index
    @pads = Pad.all.order(created_at: :desc)
  end

  def show
  end

  def create
    @pad = Pad.new(params_pad)
    if @pad.save
      render template: 'api/v1/pads/show'
    else
      render json: { error: @contact.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @pad.update(params_pad)
      render template: 'api/v1/pads/show'
    else
      render json: { error: @contact.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    if @pad.destroy
      render json: { message: 'Deleted successfully' }, status: 200
    else
      render json: { error: 'Error to try to delete a pad' }, status: :unprocessable_entity
    end
  end

  private
  def set_pad
    if Pad.where(id: params[:id]).first.nil?
      render json: { error: 'Contact not found' }, status: :unprocessable_entity
    else
      @pad = Pad.find(params[:id])
    end
  end

  def params_contact
    params.require(:pad).permit(:text)
  end
end

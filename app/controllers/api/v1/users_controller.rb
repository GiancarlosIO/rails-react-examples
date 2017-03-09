# encoding: utf-8
# API
# UsersController
class Api::V1::UsersController < Api::V1::ApiController
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    @users = User.all.order(created_at: :desc)
    @roles = Role.all
  end

  def show
  end

  def create
    @user = User.new(params_user)
    if @user.save
      render template: 'api/v1/users/show', status: 200
    else
      puts "error to create"
      render json: { error: @user.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(params_user)
      render template: 'api/v1/users/show', status: 200
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    if @note.destroy
      render json: { message: 'Deleted Successfully' }, status: 200
    else
      render json: { error: 'Error to delete the user' }, status: :unprocessable_entity
    end
  end

  private
  def set_user
    if User.where(id: params[:id]).first.nil?
      render json: { error: 'The user not exists' }, status: :not_found
    else
      @user = User.find(params[:id])
    end
  end

  def params_user
    params.require(:user).permit(:first_name, :last_name, :age, :email, :role_id)
  end
end

class Api::V2::UsersController < ApplicationController
  def index
    users = User.all()
    render json:users, status: 200
  end

  def new
    user = User.new
  end

  def create
    user = User.new(name: user_params[:name], surname: user_params[:surname], email: user_params[:email], password:user_params[:password], rol:user_params[:rol])
    if user.save
      render json:user, status: 200
    else
      render json: {error: "creating error..."}
    end
  end

  def show
    user = User.find_by(id:params[:id])
    if user
      render json:user, status: 200
    else
      render json: {error: "User not found!"}
    end
  end



  def update
    user = User.find(params[:id])

    if user
      user.update(name: params[:name], surname: params[:surname], email: params[:email], password:params[:password], rol:params[:rol])
      render json: "User updated successfully"
    else
      render json:{ error: "User not found"}
    end
  end

  

  def destroy
    user = User.find(params[:id])
    if user
      user.destroy
      render json: "User deleted successfully"
    end
  end

  private
    def user_params
      params.require(:user).permit(:name, :surname, :email, :password, :rol)
    end
end